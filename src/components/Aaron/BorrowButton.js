import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function BorrowButton()  {

    const [borrow, setBorrow] = useState(0)

    useEffect(() => {
        axios.get('https://use-my-tool.herokuapp.com/tools')
        .then(res => {
            // console.log(res);
            res.data.map(tool => {
                const info = tool.Borrowed
                console.log(info);
                setBorrow(info)
                return info;
            })
        })
    }, []);

        const handleChanges = event => {
            setBorrow({...borrow, [event.target.name]: event.target.value});
        }


        if (borrow === 0) {
            return (
                <button className="btn btn-custom" type="submit">
                Borrow
                </button>     
            )
        }

        else {
            return (
                <button  onClick={handleChanges} className="btn btn-custom" type="submit">
                Borrowed
                </button>
            )
        }

}


  
