import { useState } from "react"
import React from 'react';

export default function Header({totalIncome}) {
    return (
        <header>
            <h1>Financial Tracker</h1>
            <div className="total-income">€{totalIncome}</div>
        </header>
    )
}
