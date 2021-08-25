import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white appbar-footer">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:RichardFM291@gmail.com" role="button"
                        ><i className="fa fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/richard-mercado-3babb1207/" role="button"
                        ><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Rfm291" role="button"
                        ><i className="fa fa-github"></i></a>
                </section>
            </div>
            <div>
                <p>Thank you for your time!</p>
                <p>&copy; Richard Mercado</p>
            </div>
        </footer>
    );
}