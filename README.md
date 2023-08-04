# Cienega Timeline Project
This repository hosts the code for the Cienega Timeline project


#  Updating the Historic Events Data
STEPS
* Cleanup matrix by checking that there are no empty rows for: event title, description, start date, categories, category icon
* Remove all red styled items, it was decided that these are categorized for deletion
* Move the data (with functions) to the "CLEANUP TABLE FOR CSV to JSON" sheet
* Update the start and end date formats to "1500-01-01 12:00:00" format
* Copy the CSV data into https://csvjson.com/csv2json, in order to produce JSON
* Make sure that all required attributes in JSON are case sensitive (lower caps)
* Save new JSON file
* Upload JSON file to json folder in web app
* TEST!