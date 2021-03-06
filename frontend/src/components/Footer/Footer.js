import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// <Box
//     sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//     }}
// >
//     <CssBaseline />
//     {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
//         <Typography variant="h2" component="h1" gutterBottom>
//             Sticky footer
//         </Typography>
//         <Typography variant="h5" component="h2" gutterBottom>
//             {'Pin a footer to the bottom of the viewport.'}
//             {'The footer will move as the main element of the page grows.'}
//         </Typography>
//         <Typography variant="body1">Sticky footer placeholder.</Typography>
//     </Container> */}
//     <Box
//         component="footer"
//         sx={{
//             py: 3,
//             px: 2,
//             mt: 'auto',
//             backgroundColor: (theme) =>
//                 theme.palette.mode === 'light'
//                     ? theme.palette.grey[200]
//                     : theme.palette.grey[800],
//         }}
//     >
//         <Container maxWidth="sm">
//             <Typography variant="body1">
//                 My sticky footer can be found here.
//             </Typography>
//             <Copyright />
//         </Container>
//     </Box>
// </Box>
export default function StickyFooter() {
    return (

        <footer className="bg-white">
            <div className="container py-5">
                <div className="row py-3">

                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">About</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Stories</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Press</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2"><a href="#" className="text-muted">Login</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Register</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Sitemap</a></li>
                            <li className="mb-2"><a href="#" className="text-muted">Our Products</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-lg-0">
                        <h6 className="text-uppercase font-weight-bold mb-4">Registered Office Address</h6>
                        <p className="text-muted mb-4">Here , write the complete address of the Registered office address along with telephone number.</p>
                        <ul className="list-inline mt-4">
                            <li className="list-inline-item"><a href="#" target="_blank" title="twitter"><i className="fab  fa-2x fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="fab fa-2x fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="fab fa-2x fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="pinterest"><i className="fab fa-2x fa-youtube"></i></a></li>
                            <li className="list-inline-item"><a href="#" target="_blank" title="vimeo"><i className="fab fa-2x fa-google"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="p-0 m-0 b-0"/>


                <div className="bg-light py-2">
                    <div className="container text-center">
                        <p className="text-muted mb-0 py-2">&copy; 2019 BBBootstrap All risghts reserved.</p>

                    </div>
                </div>

        </footer>
    );
}