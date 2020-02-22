# Welcome to Intugine Shipment Tracker!

Intugine Shipment Tracker is a fully features **landing page for tracking the shipment status**.


## Navbar

The Navbar consists of the logo and three different sections that holds the information as following the Home section, the Brands section and the Transporter section along with a user icon.

## Second Sub Section

The second sub section consists of different cards that depicts different numbers for different delivery use cases.

## Left Side Card View

On the left we have a Card that initially displays **select an AWB number ** when the user visits the page for the first time. 

Once the user has selected an AWB number it displays the different phases the product has gone though from booked though delivery. It displays these information in a div where we have the scan status, the date and the time.


## Right side Table View 

On the right side, we have a table view which consists of list of data we get from making call to a back-end API. We get 100 list of data, which consists of different data like AWB Number, Transporter, Source, Destination, Brand, Start date, End Date and Delivery Status. On selecting any one of the data by checking the box , we pass the selected value to the Card View on the left side to display the progress of the delivery.

## How to run this project?

1. You can ** Clone / Download** this repository from Github.
2. Once that is done unzip the file and open it in the command line.
3. To install all the necessary packages just run, **npm install**
4. Once that is done successfully, make sure to run **npm start** to run this project. **Keep in mind this project was bootstrapped using create-react-app.**

**Happy Coding...**
