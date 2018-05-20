import csv, json;

descriptors = ['Scenario', 'Floor #', 'Wall #', 'Roof #', 'Option']
results = {}

with open('WWF_Results.csv') as csvfile:
    my_reader = csv.reader(csvfile)
    for row in my_reader:
        if (row[0] in descriptors):
            continue;   # ignore header rows contained in descriptors list
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

print json.dumps(results)