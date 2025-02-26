# Make a software to scrape the data from Wikipedia and store it in a file
import time
import os
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# List of Wikipedia links to scrape
links = [
    "https://es.wikipedia.org/wiki/Reino_de_Valencia",
    "https://es.wikipedia.org/wiki/Corona_de_Aragón",
    "https://es.wikipedia.org/wiki/Idioma_catalán"
]

# Setup Chrome WebDriver using webdriver-manager
service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

try:
  for link in links:
    driver.get(link)
    time.sleep(3)  # Wait for page to load

    try:
      # Get the title
      title = driver.find_element(By.TAG_NAME, "h1").text

      # Get the content
      content = driver.find_element(By.ID, "mw-content-text").text

      # Create a safe filename
      filename = f"{title}.txt".replace(" ", "_").replace("/", "-")

      # Save content to file
      with open(filename, "w", encoding="utf-8") as file:
          file.write(content)
      
      print(f"✅ Successfully saved: {filename}")

    except Exception as e:
      print(f"❌ Error scraping {link}: {e}")

finally:
    # Close the browser when finished
    driver.quit()