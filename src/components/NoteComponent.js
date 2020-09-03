import React from 'react';
import {Card,CardTitle,CardBody} from 'reactstrap';

export const Note =  ({message,id,description,deleteNote}) =>{
    return(

                <div className="col-md-8 offset-md-2 my-2">
                    <Card>
                        <CardTitle style={{"font-weight":"bold","color":"black"}} className="py-2">
                            <div className="row">
                                <div className="col-10">
                                    <p className="px-2">{id} . {message}</p>
                                </div>
                                <div className="col-2 text-center">
                                    <a href="#" style={{"color":"black"}}><span className="fa fa-trash" onClick={() => deleteNote(id)}></span></a>
                                </div>
                            </div>
                        </CardTitle>
                        <CardBody style={{"background":"black","color":"white"}}>
                            {description}
                        </CardBody>
                    </Card>
                </div>
    );
}