import {
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";

const faqList = [
  {
    question: "Jam operasional penjahit kapan saja ya?",
    answer: `Untuk saat ini operasional penjahit dari jam 08.00-17.00 WIB ya! Tapi kamu bisa banget untuk request order sesuai tanggal yang kamu inginkan`,
  },
  {
    question: "Apa bisa order diluar wilayah Bintaro?",
    answer: `Sayang sekali untuk saat ini belum bisa, silahkan isi link https://bit.ly/PenambahanLokasi supaya Najait bisa hadir di wilayah rumah/kantor kalian!`,
  },
  {
    question: "Apa saja yang disediakan oleh Najait?",
    answer: `Kami menyediakan jasa reparasi dan vermak baju seperti pasang resleting, pasang kancing, potong bahan, dan lainnya yang sifatnya tidak merombak baju secara keseluruhan`,
  },
  {
    question: "Penjahitnya harus ditunggu sampai selesai?",
    answer: `Tergantung tingkat kesulitan, tapi jika dari kawan jahit ingin ditinggal, dapat dikomunikasikan dengan penjahit, supaya mereka bisa tau akan diambil dimana atau bisa dititip dengan orang di rumah!`,
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let panel = 0;
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <SectionTitle text="Frequently Asked Questions" dark={true} />
      <Box p={2} m={1}>
        {faqList.map((faq) => {
          panel++;
          const currentPanel = "panel" + panel;
          return (
            <Accordion
              expanded={expanded === currentPanel}
              onChange={handleChange(currentPanel)}
            >
              <AccordionSummary
                expandIcon={
                  <ArrowForwardIosSharpIcon
                    sx={{ transform: "rotate(90deg)" }}
                  />
                }
                aria-controls={currentPanel + "d-content"}
                id={currentPanel + "d-header"}
                sx={{
                  backgroundColor: "#F5F5F5",
                }}
              >
                <Typography fontWeight="bold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Grid>
  );
};

export default Faq;
