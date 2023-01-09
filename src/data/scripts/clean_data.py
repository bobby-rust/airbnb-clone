import json
import os

curr_dir = os.getcwd()
file_path = os.path.join(curr_dir, "src", "data", "data.json")
print(file_path)

'''
    listings = data.data.presentation.explore.sections.sections[1].section.child!.section.items;
    sectionComponentType                 LOOP THROUGH THIS ARRAY
    data[presentation][explore][sections][sections(ARRAY)].sectionComponentType
    data[presentation][explore][sections][sections(ARRAY)].section.__typename contains "listing"
    sectionsArray.section.child.section.__typename contains "listing"
    then that section has items array that has listings
'''
with open(file_path) as data:
    dataDict = json.loads(data.read())

relDataArr = dataDict["data"]["presentation"]["explore"]["sections"]["sections"]

for obj in relDataArr:
    if "child" in obj["section"]:
        print(obj["section"]["child"]["section"]["__typename"])
        if ("Listing" in obj["section"]["child"]["section"]["__typename"]):
            print("ye")
    # print("listing section found")
    # print(obj["child"])

# for key, value in dataDict["data"]["presentation"].items():
#     print(key)
