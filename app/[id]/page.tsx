"use client"

import tweets from './tweets.json'
import { useRouter, useParams } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Page() {

    const params = useParams();
    const { replace } = useRouter();

    const idStr = Array.isArray(params.id) ? params.id[0] : params.id;

    // Fallback to '1' if idStr is undefined
    const id = parseInt(idStr || '1', 10) || 1;
    
    const [page, setPage] = useState(id);

    const len = tweets.length;

    if(id < 1 || id > len) {
        return <h1>We have got posts from 1 to {len}. <br />Post No. {params.id} out of range.</h1>
    }
    
    const tweet = tweets[id-1];
    console.log(tweet)


    return (
        <>
            <Grid container spacing={2} justifyContent="center">

                <Grid size={6}>
                    <Paper elevation={1} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Tweet #{id} A
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {tweet.text1}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={6}>
                    <Paper elevation={1} style={{ padding: '20px' }}>
                        <Typography variant="h4" gutterBottom>
                            Tweet #{id} B
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {tweet.text2}
                        </Typography>
                    </Paper>
                </Grid>

                <Pagination count={len} page={page} onChange={(e, n) => {setPage(n); replace(`/${n}`)}}  variant="outlined" color="primary"/>

                {/* link stored in tweet.origin and tweet.paper, click btn to jump */}
                <div style ={{ display: 'flex', gap: '10px'}}>
                <Button variant="outlined" onClick={() => window.open(tweet.origin, '_blank')}>Original Tweet</Button>
                <Button variant="contained" onClick={() => window.open(tweet.paper, '_blank')}>Go to view Paper</Button>
                </div>
                
            </Grid>
        </>
    );
}