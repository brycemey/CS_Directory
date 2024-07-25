
import pandas as pd
from PIL import Image
from IPython.display import display, HTML
#from weasyprint import HTML

# Read the CSV file
df = pd.read_csv("C:\\Users\\bmey2\\Downloads\\Student Roster - Sheet1 (1).csv") #Change csv name for computer being used

# Start the HTML string
html_string = '<html><head><title>Student Directory</title></head><body>'
html_string += '<h1>Student Directory</h1><table border="1"><tr><th>Name</th><th>Picture</th></tr>'

# Process each row in the DataFrame
for index, row in df.iterrows():
    name = row['Name']
    picture_path = row['Picture']
    
    # Add the student's details to the HTML string
    html_string += f'<tr><td>{name}</td><td><img src="{picture_path}" alt="{name}" width="100" height="100"></td></tr>'

# End the HTML string
html_string += '</table></body></html>'

# Write the HTML string to a file
with open('student_directory.html', 'w') as f:
    f.write(html_string)

# Display the HTML (optional, for Jupyter Notebook)
display(HTML(html_string))
#HTML('student_directory.html').write_pdf('student_directory.pdf')