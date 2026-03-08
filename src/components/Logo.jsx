import React from 'react';

const Logo = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 450">
        {/* Fondo */}
        <rect width="100%" height="100%" fill="transparent" />

        {/* Texto principal */}
        <text x="80" y="170"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="150"
            fontWeight="300"
            letterSpacing="12"
            fill="#6f6f6f">
            SAN
        </text>

        <text x="80" y="300"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="150"
            fontWeight="300"
            letterSpacing="12"
            fill="#6f6f6f">
            MIGUEL
        </text>

        {/* Subtexto */}
        <text x="90" y="360"
            fontFamily="Helvetica, Arial, sans-serif"
            fontSize="70"
            fill="#6f6f6f">
            muebles
        </text>

        {/* Caja verde */}
        <rect x="900" y="40"
            width="320"
            height="360"
            rx="10"
            fill="#A6E05F" />

        {/* Silla */}
        <path d="
            M1020 90
            Q1040 140 1040 180
            L1040 290
            M1040 210
            L1110 210
            M1110 210
            L1110 290
            "
            stroke="white"
            strokeWidth="22"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
);

export default Logo;
