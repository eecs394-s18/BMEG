import csv, json, io;

# PRECONDITION: files "WWF_Results.csv" and "WWF_Key.csv" must be in same folder as this script.
# OUTPUT: JSON files to the database folder.

# Index of "descriptors" maps to key of "keys" - both must be the same length.
descriptors = ['Scenario', 'Floor Number', 'Wall Number', 'Roof Number', 'Option', '']
results = {}
keys = {
    0: {},
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
}
index = None

with open('WWF_Results.csv') as csvfile:
    my_reader = csv.reader(csvfile)
    for row in my_reader:
        if (row[0] in descriptors):
            continue     # ignore header rows contained in descriptors list
        else:
            data_dict = {
                'cost': row[2],
                'energy': row[3],
                'floor': row[4],
                'walls': row[5],
                'roof': row[6]
            }

            if (row[0] not in results): # create new inner dict if key has not been created before
                results[row[0]] = {}

            results[row[0]][row[1]] = data_dict

# Write to database folder
with io.open('../assets/database/results.json', 'w', encoding = 'utf-8') as f:
    f.write(unicode(json.dumps(results, ensure_ascii = False)))

with open('WWF_Key.csv') as csvfile:
    my_reader = csv.reader(csvfile)
    for row in my_reader:
        if (row[0] in descriptors):
            index = descriptors.index(row[0]) # set key value to add to appropriate dictionary
            continue;
        else:
            if (index == 0):    # reverse key-value ordering for scenario option
                name = row[1][3:]     # strip "no" from string
                keys[index][name] = row[0]
            else:
                keys[index][row[0]] = row[1]

# Write each dictionary to database folder
for key, value in keys.iteritems():
    if (descriptors[key] == ''): # skip empty character delimiter
        continue
    with io.open('../assets/database/' + descriptors[key].lower().replace(" ", "_") + '.json', 'w', encoding = 'utf-8') as f:
        f.write(unicode(json.dumps(value, ensure_ascii = False)))