// import { Button, Checkbox, Grid, TextField, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
// import { set } from 'date-fns';
// import React, { useEffect, useState } from 'react'
// import Muidropdown from '../component/dropdown';
// import { getDataFromDataBase, sendDataToDataBase } from '../config/firebasemethod';

// function AdminpanelQu() {
//     // Final object this.state.
//     const [Quizinfo, setQuizinfo] = useState({})
//     const [fullQuizdata, setfullQuizdata] = useState([])
//     const [question, setquestion] = useState("");
//     const [questionWithOption, setquestionWithOption] = useState({});
//     const [questionFromDB, setquestionFromDB] = useState([]);
//     //input data option
//     const [options, setoptions] = useState("");
//     ///Option ary hn
//     const [optionsarr, setoptionsarr] = useState([]);
//     const [disabled, setdisabled] = useState(false);

//     // console.log(optionsarr)
//     const Quizinfosend=()=>{
//         setdisabled(true)
//         console.log(Quizinfo)
//     }
//     const handelChange = (event) => {
//         let newInput = { [event.target.name]: event.target.value }
//         setQuizinfo({ ...Quizinfo, ...newInput })
//     }
//     const QuestionSend = (event) => {
//         let newInput = { [event.target.name]: event.target.value }
//         setquestion({ ...question, ...newInput })
//     }

//     const optionadded =()=>{
//         setoptionsarr([options,...optionsarr])
//         setoptions("")
//     }
//     console.log(questionWithOption) 
//     const submitQuestion=()=>{
//         let newInput = { 'question': question, 'option': [...optionsarr] }
//         setquestionWithOption({...newInput})
//         setoptions("")
//         setquestion("")
//     }
//     const Quizadd=()=>{

//     }

//     // console.log(questionFromDB)

//     // const QuestionSendInDataBase = () => {
//     //     sendDataToDataBase({
//     //         Question: question,
//     //         options: [],
//     //     }, `QuizQuestions/`)
//     //         .then((resolve) => {
//     //             // navigate('/login')
//     //             console.log(resolve)
//     //         })
//     //         .catch((error) => {
//     //             console.log(error)
//     //         });
//     // }
//     // // now we Get the Question From Data Base 
//     // const getQuestionFromDB = () => {
//     //     getDataFromDataBase(`QuizQuestions/`)
//     //         .then((res) => {
//     //             setquestionFromDB(res)
//     //         })
//     //         .catch((error) => {
//     //             console.log(error)
//     //         })

//     // }
//     // useEffect(() => {
//     //     getQuestionFromDB();
//     // }, [])
//     return (
//         <Box 
//         sx={{
//             width: 700,
//             height: 300,}}
//         >
//             <Grid>
//                 <Typography variant='h5' mt={1} align='center' >Add Questions/Answers In Quiz For Your Students </Typography>
//             </Grid>
//             <Box>
//                 <Grid container spacing={2}  justifyContent='center'  alignItems='center' >
//                     <Grid item xs={6} md={8}>
//                         <TextField
//                             fullWidth
//                             disabled={disabled}
//                             margin="normal"
//                             required
//                             id="quizName"
//                             label="QuizName"
//                             name="quizName"
//                             autoComplete="quizName"
//                             autoFocus
//                             onChange={(e) => handelChange(e)}
//                         />
//                     </Grid>
//                     <Grid item xs={6} md={4}>
//                         <TextField
//                             fullWidth
//                             disabled={disabled}
//                             margin="normal"
//                             required
//                             id="duration"
//                             label="Duration"
//                             name="duration"
//                             autoComplete="duration"
//                             autoFocus
//                             onChange={(e) => handelChange(e)}
//                         />
//                     </Grid>
//                     <Grid item xs={4} md={4}>
//                         < Muidropdown
//                             label='Course'
//                             labelId='Course-label'
//                             onChange={(e) => handelChange(e)}
//                             name='Course'
//                             dataSource={[
//                                 {
//                                     option: "Web Course"
//                                 },
//                                 {
//                                     option: "Graphic Designing"
//                                 },
//                                 {
//                                     option: "Marketing"
//                                 },
//                             ]}
//                         />
//                     </Grid>
//                     <Grid item xs={4} md={2}>
//                         <TextField
//                             fullWidth
//                             disabled={disabled}
//                             margin="normal"
//                             required
//                             id="totalmakrs"
//                             label="Totalmakrs"
//                             name="totalmakrs"
//                             autoComplete="totalmakrs"
//                             autoFocus
//                             onChange={(e) => handelChange(e)}
//                         />
//                     </Grid>
//                 <Grid item ms={2}  >
//                     {/* onClick={QuestionSendInDataBase} */}
//                     <Button variant='contained' onClick={Quizinfosend}  >Add Quiz Data</Button>
//                 </Grid>
//                 </Grid>
//                 {/* <Grid /> */}
//             </Box>
//             <Box>
//                 <Grid container spacing={2} justifyContent='center' >
//                     <Grid item  xs={6} md={8}>
//                         <TextField
//                             fullWidth
//                             margin="normal"
//                             required
//                             id="question"
//                             label="Question"
//                             name="question"
//                             autoComplete="question"
//                             value={question}
//                             autoFocus
//                             onChange={(e) => setquestion(e.target.value)}
//                         />
//                     </Grid>
//                     <Grid item xs={4} md={4}>
//                         <TextField
//                             fullWidth
//                             margin="normal"
//                             required
//                             id="options"
//                             label="options"
//                             name="options"
//                             autoComplete="options"
//                             autoFocus
//                             onChange={(e) => setoptions(e.target.value)}
//                             value={options}
//                         />
//                     </Grid>
//                     <Grid container spacing={6}  display="flex" justifyContent="flex-end">
//                     <Grid item >
//                         <Button variant="outlined" size='small' onClick={ (e)=> optionadded(e)} >Add option</Button>
//                     </Grid>
//                     <Grid item >
//                         <Button variant='contained' size='small' color="secondary" onClick={ (e)=> submitQuestion(e)} >Submit Question</Button>
//                     </Grid>
//                     <Grid item >
//                         <Button variant='contained' color="success" size='small' onClick={Quizadd} >Quizadd </Button>
//                     </Grid>
//                     </Grid>
//                     <Grid item md={12}>
//                     </Grid>
//                 </Grid>
//             </Box>
//         </Box>

//     )
// }

// export default AdminpanelQu
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Muidropdown from '../component/dropdown';
import Checkbox from "@mui/material/Checkbox";
import { getDataFromDataBase, sendDataToDataBase } from "../config/firebasemethod";

function Quiz() {
    const [isCreateQuiz, setIsCreateQuiz] = useState(false);
    const [model, setModel] = useState({});
    const [question, setQuestion] = useState({});
    const [questions, setQuestions] = useState([]);
    const [option, setOption] = useState("");
    const [optionsArr, setOptionsArr] = useState([]);
    const [QuizFromDB, setQuizFromDB] = useState();

    let createQuiz = () => {
        console.log(model)
        setIsCreateQuiz(true);
    };
    let fillModel = (key, val) => {
        model[key] = val;
        setModel({ ...model });
    };
    let addOption = () => {
        setOptionsArr([...optionsArr, { value: option }]);
        setOption("")
    };
    let submitQuestion = () => {
        question.option = optionsArr.map(x => x.value);
        question.correctanswer = optionsArr.find((x => x.isChecked)).value;
        setQuestions([...questions, question])
        setQuestion("")
    }

    let SubmitQuiz = () => {
        model.questionsArray = questions
        // console.log(data);
        sendDataToDataBase(model, `Quiz/`)
            .then((userID) => {
                console.log(userID);
            })
            .catch((error) => {
                console.log(error)
            });
        console.log(model)
    }

    const getStudentData = () => {
        getDataFromDataBase(`Quiz/`)
            .then((res) => {
                setQuizFromDB(res)

            })
            .catch((error) => {
                alert(error)
            })

    }
    useEffect(() => {
        getStudentData();
    }, [])


    return (
        <>
            <Box>
                <Typography textAlign="center" variant="h4">Quiz</Typography>
                <Box>
                    <Grid container >
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    onChange={(e) => fillModel("question", e.target.value)}
                                    disabled={isCreateQuiz}
                                    label="Quiz Name"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    onChange={(e) => fillModel("duration", e.target.value)}
                                    disabled={isCreateQuiz}
                                    label="Quiz Duration"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <Muidropdown
                                    label="Course"
                                    onChange={(e) => fillModel("course", e.target.value)}
                                    disabled={isCreateQuiz}
                                    dataSource={[
                                        {
                                            option: "Web Course"
                                        },
                                        {
                                            option: "Graphic Designing"
                                        },
                                        {
                                            option: "Marketing"
                                        },
                                    ]}
                                />
                            </Box>
                        </Grid>
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    onChange={(e) => fillModel("marks", e.target.value)}
                                    disabled={isCreateQuiz}
                                    label="Quiz Marks"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <TextField
                                    fullWidth
                                    onChange={(e) => fillModel("Seurity", e.target.value)}
                                    disabled={isCreateQuiz}
                                    label="Quiz Seurity"
                                />
                            </Box>
                        </Grid>
                        <Grid item md={2}  >
                            <Box sx={{ padding: 2 }}>
                                <Button size="large" variant="contained" onClick={createQuiz}>Create Quiz</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    {isCreateQuiz && (
                        <Grid container>
                            <Grid md={4} item>
                                <Box sx={{ padding: 2 }}>
                                    <TextField
                                        fullWidth
                                        onChange={(e) => {
                                            setQuestion({ ...question, question: e.target.value });
                                        }}
                                        label="Question"
                                    />
                                </Box>
                            </Grid>
                            <Grid md={2} item>
                                <Box sx={{ padding: 2 }}>
                                    <TextField
                                        fullWidth
                                        onChange={(e) => setOption(e.target.value)}
                                        label="Option"
                                        value={option}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={2}  >
                                <Box sx={{ padding: 2 }}>
                                    <Button size="large" variant="contained" onClick={addOption}>Add options</Button>
                                </Box>
                            </Grid>
                            <Grid item md={2}  >
                                <Box sx={{ padding: 2 }}>
                                    <Button size="large" variant="contained" onClick={submitQuestion}>Submit Question</Button>
                                </Box>
                            </Grid>
                            <Grid item md={2}  >
                                <Box sx={{ padding: 2 }}>
                                    <Button size="large" variant="contained" onClick={SubmitQuiz}>Lock Quiz</Button>
                                </Box>
                            </Grid>
                            <Grid md={6} item>
                                {optionsArr.map((x, i) => (
                                    <>
                                        <Checkbox
                                            onChange={(e) => (x.isChecked = e.target.value)}
                                        />{" "}
                                        <Typography key={i}>{x.value}</Typography>
                                    </>
                                ))}
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Box>
            {/* <Grid container>
                <Grid item >
                    {model.map((e,i)=>{
                        <Box>
                            <Typography variant="p" >Course name{e.course}</Typography>
                        </Box>
                    })}
                </Grid>
            </Grid> */}
        </>
    );
}
export default Quiz;