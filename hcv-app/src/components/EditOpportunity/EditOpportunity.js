import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import get from "lodash/get";
import OpportunityDetails from "../OpportunityDetails/OpportunityDetails";
import Container from '@mui/material/Container';
import BasicInfoForm from './EditBasicInfoForm';
import Paper from "@mui/material/Paper";

const theme = createTheme();

const EditOpportunity = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="left" gutterBottom={true} style={{ fontWeight: 600 }}>
                        Edit Opportunity
                    </Typography>

                    <React.Fragment>
                        <React.Fragment>
                            <BasicInfoForm/>
                        </React.Fragment>
                    </React.Fragment>
                </Paper>
            </Container>
        </ThemeProvider>
    )
};

export default EditOpportunity;