import React from 'react';
import { FaGithub } from "react-icons/fa";

import classes from './git.module.css';

const githubUsers = ({ users }) => {
    return (
        <div >
            <div className={classes.header}> <h2>GitHub Users</h2> </div>
            <div className={classes.grid}>
                {
                    users.map((curElem) => {
                        const { avatar_url, id, login, type } = curElem;
                        return (

                            <div className={classes.card} key={id}>
                                <div classNam={classes.griditem}>
                                    <div className={classes.row}>
                                        <div > <img src={avatar_url} alt="" width="100" /> </div>
                                        <div className={classes.colummn}>
                                            <h4 >{login} <FaGithub /> </h4>
                                            <div className={classes.row}>
                                                <div ><h6> {type} </h6></div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>

    )
}

export default githubUsers
