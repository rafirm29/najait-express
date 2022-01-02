import {
  Grid,
  Box,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle";

const testimonials = [
  {
    author: "Hanief",
    title: "Permata Bintaro",
    comment: `Kalo review dari hasil jaitan itu cuma di bagian harganya aja karena menurut gw kemahalan buat 25k untuk jait resleting celana jeans tapi kurang tau kalo di tempat jaitan yang lain harganya brp, oh iya masukkan dari gw kalo bisa menjaitnya lebih mendetail lagi karna biar hasilnya tuh tahan lama. 
    
    Mungkin kedepannya coba bisa tambahin scan barcode untuk gopay, ovo, dll. Biar lebih mudah dan praktis karna kalo pembayaran cash belum tentu ada kembalian dari penjaitnya. 
    Selebihnya sih oke bapaknya juga dateng tepat waktu. Sukses terus buat Najait.co🤘🏼`,
  },
  {
    author: "Nadine",
    title: "Maleo Bintaro",
    comment: `Pelayanannya udah baikk, wa responsif tp mungkin bisa ditingkatin lagi kecepatan dalam responnya sm ngabarin jadwal tukang jaitnyaa, tp overall baguss tukang jaitnya jg baik bgt, responsif, dan hasil jaitannya rapih dan sesuai😍 super ngebantu bgt karena udh agak susah nyari tukang jait keliling!! thankyouu najait!`,
  },
];

const TestimonialItems = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="flex-start"
      height="100%"
      spacing={2}
      px={2}
      mt={2}
    >
      {testimonials.map((testimonial) => {
        return (
          <Grid item xs={12} sm={10} md={8}>
            <Card sx={{ minHeight: "12.5rem" }}>
              <CardHeader
                avatar={<Avatar />}
                title={
                  <Typography fontWeight="bold">
                    {testimonial.author}
                  </Typography>
                }
                subheader={testimonial.title}
              />
              <CardContent sx={{ paddingTop: 0 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: { xs: "14px" } }}
                >
                  {testimonial.comment}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

// !!! SM responsive
const Testimonials = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#8ED1C0",
        pb: 4,
      }}
    >
      <SectionTitle text="Testimonials" />
      <TestimonialItems />
    </Grid>
  );
};

export default Testimonials;
