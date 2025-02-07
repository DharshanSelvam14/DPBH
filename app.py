# # app.py
# from flask import Flask, request, jsonify
# from flask_cors import CORS
# from scrapy.crawler import CrawlerProcess
# import subprocess
# import json
# from twisted.internet import reactor, threads
# from product_scraper.product_scraper.spiders.ecom_spider import EcomSpider

# app = Flask(__name__)
# CORS(app)

# result_data = []

# class ResultsCollectorPipeline:
#     def process_item(self, item, spider):
#         try:
#             # Print the contents of the item
#             print("Scraped item:", dict(item))

#             # Alternatively, you can log the information
#             logging.info("Scraped item: %s", dict(item))

#             # Append the item to the result_data list
#             result_data.append(dict(item))
#         except Exception as e:
#             # Handle any exceptions that might occur during processing
#             logging.error("Error processing item: %s", str(e))

#         return item

# # ...

# def process_url_logic(start_url):
#     try:
#         global result_data
#         result_data = []

#         process = CrawlerProcess()

#         settings = {
#             'ITEM_PIPELINES': {'__main__.ResultsCollectorPipeline': 1},
#         }

#         deferred = process.crawl(EcomSpider, start_urls=[start_url], custom_settings=settings)

#         deferred.addBoth(lambda _: reactor.callFromThread(reactor.stop))

#         reactor.run()

#         return result_data
#     except Exception as e:
#         error_message = f"An error occurred: {str(e)}"
#         return {'status': 'error', 'message': error_message}


# @app.route('/process_url', methods=['POST'])
# def process_url():
#     try:
#         # Get JSON data from the request
#         data = request.json
#         start_url = data.get('url')

#         # Call the logic function with the start URL
#         # command = ['scrapy', 'runspider', 'product_scraper/product_scraper/spiders/ecom_spider.py', '-a', f'url={start_url}', '-O', 'output.json']
#         result_data = process_url_logic(start_url)
#         # subprocess.run(command, check=True)
        
#         # with open('output.json', 'r') as file:
#         #     data = json.load(file)

#         # Return the result data as JSON
#         return jsonify({'status': 'success', 'data': result_data})
#     except Exception as e:
#         error_message = f"An error occurred: {str(e)}"
#         return jsonify({'status': 'error', 'message': error_message})

# @app.after_request
# def after_request(response):
#     threads.deferToThread(process_url_logic, request.form.get('start_url', ''))
#     return response

# if __name__ == '__main__':
#     app.run(port=5000, debug=True)



import crochet
crochet.setup()
import os
from flask import Flask , render_template, jsonify, request, redirect, url_for
from flask_cors import CORS
import scrapy
from scrapy import signals
from scrapy.crawler import CrawlerRunner
from scrapy.signalmanager import dispatcher
import time

# Importing our Scraping Function from the amazon_scraping file

from product_scraper.product_scraper.spiders.ecom_spider import ReviewspiderSpider

# Creating Flask App Variable

app = Flask(__name__)
CORS(app)

output_data = []
crawl_runner = CrawlerRunner()

# By Deafult Flask will come into this when we run the file
# @app.route('/')
# def index():
# 	return render_template("index.html") # Returns index.html file in templates folder.


# After clicking the Submit Button FLASK will come into this
# @app.route('/', methods=['POST'])

# def submit():
#     if request.method == 'POST':
#         s = request.form['url'] # Getting the Input Amazon Product URL
#         global baseURL
#         baseURL = s
        
#         # This will remove any existing file with the same name so that the scrapy will not append the data to any previous file.
#         if os.path.exists("<path_to_outputfile.json>"): 
#             os.remove("<path_to_outputfile.json>")
#         if os.path.exists("<path_to_outputfile.json>"): 
#             os.remove("<path_to_outputfile.json>")

#         return redirect(url_for('scrape')) # Passing to the Scrape function


@app.route("/scrape", methods=['POST'])
def scrape():
    data = request.json
    baseURL = data.get('currentUrl')
    output_data.clear()
    scrape_with_crochet(baseURL=baseURL) # Passing that URL to our Scraping Function

    time.sleep(20) # Pause the function while the scrapy spider is running
    res = output_data.pop()
    # output_data.clear()
    # return jsonify(output_data)
    return jsonify(res) # Returns the scraped data after being running for 20 seconds.
  
  
@crochet.run_in_reactor
def scrape_with_crochet(baseURL):
    # This will connect to the dispatcher that will kind of loop the code between these two functions.
    dispatcher.connect(_crawler_result, signal=signals.item_scraped)
    
    # This will connect to the ReviewspiderSpider function in our scrapy file and after each yield will pass to the crawler_result function.
    eventual = crawl_runner.crawl(ReviewspiderSpider, category = baseURL)
    return eventual

#This will append the data to the output data list.
def _crawler_result(item, response, spider):
    output_data.append(dict(item))


if __name__== "__main__":
    app.run(port=5500, debug=True)