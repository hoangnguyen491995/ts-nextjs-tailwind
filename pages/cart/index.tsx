import { Grid } from "@material-ui/core";

const Cart: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid  md={3}> name </Grid>
      <Grid  md={3}> hình ảnh</Grid>
      <Grid  md={3}> Giá</Grid>
      <Grid  md={3}> Mô tả chi tiết</Grid>
    </Grid>
  );
};

export default Cart;
