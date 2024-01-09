import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'تعداد حلقه‌های المپیک؟',
                    answerOptions: [
                        { answerText: '3 عدد', isCorrect: false },
                        { answerText: '9 عدد', isCorrect: false },
                        { answerText: '5 عدد', isCorrect: true },
                        { answerText: '4 عدد', isCorrect: false },
                    ],
                },
                {
                    questionText: 'کدام کارگردان رکورد دار دریافت سیمرغ بهترین فیلم و کارگردانی در جشنواره فیلم فجر است؟',
                    answerOptions: [
                        { answerText: 'مجید مجیدی', isCorrect: false },
                        { answerText: 'ابراهیم حاتمی کیا', isCorrect: true },
                        { answerText: 'اصغر فرهادی', isCorrect: false },
                        { answerText: 'داریوش مهرجویی', isCorrect: false },
                    ],
                },
                {
                    questionText: ' کدام درخت نماد صلح است؟',
                    answerOptions: [
                        { answerText: 'زیتون', isCorrect: true },
                        { answerText: 'سرو', isCorrect: false },
                        { answerText: 'سیب', isCorrect: false },
                        { answerText: 'گردو', isCorrect: false },
                    ],
                },
                {
                    questionText: ' تجزیه ظروف پلاستیکی چند سال طول میکشد؟',
                    answerOptions: [
                        { answerText: '5 سال', isCorrect: false },
                        { answerText: '50 سال ', isCorrect: false },
                        { answerText: '100 سال', isCorrect: false },
                        { answerText: '500 سال', isCorrect: true },
                    ],
                },
                {
                    questionText:' چند درصد بدن انسان را آب تشکیل میدهد؟',
                    answerOptions: [
                        { answerText: '30 درصد', isCorrect: false },
                        { answerText: '40 درصد', isCorrect: false },
                        { answerText: '50 درصد', isCorrect: false },
                        { answerText: '60 درصد', isCorrect: true },
                    ],
                },
                {
                    questionText: 'شهر بهار نارنج لفب کدام شهر ایران است؟',
                    answerOptions: [
                        { answerText: 'بوشهر', isCorrect: false },
                        { answerText: 'زاهدان', isCorrect: false },
                        { answerText: 'بابل', isCorrect: true },
                        { answerText: 'شیراز', isCorrect: false },
                    ],
                },
                {
                    questionText: 'کدام حشره بیشترین طول عمر را دارد؟',
                    answerOptions: [
                        { answerText: 'موریانه', isCorrect: true },
                        { answerText: 'مورچه', isCorrect: false },
                        { answerText: 'ملخ', isCorrect: false },
                        { answerText: 'عنکبوت', isCorrect: false },
                    ],
                },
                {
                    questionText: 'کدام حیوان در هنگام خواب یک چشم خود را باز نگه میدارد؟',
                    answerOptions: [
                        { answerText: 'شغال', isCorrect: false },
                        { answerText: 'روباه', isCorrect: false },
                        { answerText: 'جغد', isCorrect: false },
                        { answerText: 'گرگ', isCorrect: true },
                    ],
                },
                {
                    questionText: ' عمیق ترین دریاچه جهان کدام است؟',
                    answerOptions: [
                        { answerText: 'خزر', isCorrect: false },
                        { answerText: 'وان', isCorrect: false },
                        { answerText: 'بایکال', isCorrect: true },
                        { answerText: 'دانوپ', isCorrect: false },
                    ],
                },
                {
                    questionText: 'کوتاه ترین مرز خاکی مشترک ایران با چه کشوری است؟',
                    answerOptions: [
                        { answerText: 'ترکیه', isCorrect: false },
                        { answerText: 'آذربایجان', isCorrect: false },
                        { answerText: 'ترکمنستان', isCorrect: false },
                        { answerText: 'ارمنستان', isCorrect: true },
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }
    }

    clickHandler(isCorrect) {
        console.log(isCorrect);

        if (isCorrect) {
            this.setState(prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }

        if (this.state.currentQuestion === 9) {
            this.setState({ showScore: true })
        } else {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }


    }

    render() {
        return (
            <div className='app'>
                {this.state.showScore ?
                    (<div className='score-section'>
                        You scored {this.state.score} out of {this.state.questions.length}
                    </div>) : (
                        <div className='question-container'>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>سوال {this.state.currentQuestion + 1}</span>/ {this.state.questions.length}
                                </div>
                                <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {this.state.questions[this.state.currentQuestion].answerOptions.map(answer => (
                                    <button onClick={this.clickHandler.bind(this, answer.isCorrect)}>{answer.answerText}</button>
                                ))}

                            </div>
                        </div>
                    )}



            </div>
        )
    }
}