from bs4 import BeautifulSoup
import requests

# Define the URL of the webpage
url = "https://www.amazon.in/Samsung-Awesome-Graphite-Storage-Gorilla/dp/B0BXCZNH3B/ref=sr_1_2?crid=BA9H3GJQJ7ZK&dib=eyJ2IjoiMSJ9.AIfa6ytA5T-sVGtBV52kBJ_P-VcwZ8EdUQeO-DwWlk8rRL7kzs6EV0zcYiX4SReHpoOqzt1whnFkxXRzVpyGeeErf13h0tm_7JPsaoeZsMFyu_7yrCddzkDIpdlAjPtyGpyHBHMA9l9WmsTM5kAQxl_UElHtM9zitAa1mEnOit6DQm7K5AA4ZaVEL0HMzfGcSrXhScNCLYAFidpxZNVO0qXZCN_hPc443IrtkoQkcH0.BjD4PoecPyWZD4SNf2ERXz6mrqDr95ITF1Kqx-cOgjo&dib_tag=se&keywords=samsung%2Ba54%2B5g&qid=1714384037&sprefix=%2Caps%2C277&sr=8-2&th=1"  # Replace with the actual URL

# Send an HTTP GET request and get the HTML content
response = requests.get(url)

# Check for successful response
if response.status_code == 200:
  # Parse the HTML content with BeautifulSoup
  soup = BeautifulSoup(response.content, "html.parser")

  # Specify the class name to scrape data from
  class_name = "vsx-offers-desktop-lv__list"  # Replace with the actual class name

  # Find all elements with the specified class
  products = soup.find_all("div", class_=class_name)

  # Extract and display data from each element
  for product in products:
    # You can extract specific data points using element attributes or tags within the class
    # For example, to get the title:
    title = product.find("h2").text.strip()
    print(f"Title: {title}")

    # You can add logic to extract other data points like price, description, etc.
else:
  print(f"Error: Failed to retrieve the webpage. Status code: {response.status_code}")
