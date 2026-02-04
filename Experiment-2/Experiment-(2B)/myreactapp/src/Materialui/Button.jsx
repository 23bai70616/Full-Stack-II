import Button from '@mui/material/Button';

const CustomButton = ({ text, onClick, variant = 'contained' }) => {
  return (
    <Button
      variant={variant}
      color="primary"
      onClick={onClick}
      sx={{ margin: 1 }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
