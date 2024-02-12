import { makeStyles } from "mui-styles-hook";

const useStyles= makeStyles(() => ({
 appBar: {
   borderRadius: '15px',
   margin: '30px 0',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#f5f5f5', // Customize background color
 },
 heading: {
   color: 'rgba(0,183,255, 1)', // Customize text color
   fontSize: '2rem', // Adjust font size
   fontWeight: 'bold', // Set desired font weight
   fontFamily: 'sans-serif', // Set preferred font family
 },
 image: {
   marginLeft: '15px',
   borderRadius: '50%', // Add image border radius
 },
}));

export default useStyles;

