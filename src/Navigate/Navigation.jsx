import React from "react";
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav style={{margin: 20, display: 'flex', flexDirection: 'row', gap: 20}}>
            <Link to="/generate">Generate</Link>
            <Link to="/scan">Scan</Link>
            <Link to="/generateHistory">Generate History</Link>
            <Link to="/scanHistory">Scan History</Link>

        </nav>
    )
}

export default Navigation 