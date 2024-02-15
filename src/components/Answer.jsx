import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: '#FFB549',
  color: '#FFB549',
  fontWeight: 600,
  marginBottom: '8px',
  '&:hover': {
    backgroundColor: '#FFB549',
    color: '#fff',
  },
}));

const Answer = (props) => {
  return (
    <CustomButton
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </CustomButton>
  );
};



export default Answer


//#5youtubeの記述の仕方(古い)
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(style: (theme) => ({
  //     root: {
    
    //     },
    // }));
    
    // const Answer = () => {
      //     // const classes = useStyles();
      //     return(
        //         <Button variant="contained">Default</Button>
        //     )
        // }
        
        {/* <Button variant="contained" disableElevation>
          Disable elevation
        </Button> */}
// export default Answer