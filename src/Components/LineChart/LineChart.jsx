import { LineChart as LCchart, Line } from 'recharts';

const LineChart = () => {

    const students_math_marks = [
        { "student": "Student 1", "math_mark": 85 },
        { "student": "Student 2", "math_mark": 72 },
        { "student": "Student 3", "math_mark": 90 },
        { "student": "Student 4", "math_mark": 65 },
        { "student": "Student 5", "math_mark": 78 },
        { "student": "Student 6", "math_mark": 88 },
        { "student": "Student 7", "math_mark": 70 },
        { "student": "Student 8", "math_mark": 95 },
        { "student": "Student 9", "math_mark": 60 },
        { "student": "Student 10", "math_mark": 82 }
    ]


    return (
        <div>
            <LCchart width={900} height={400} data={students_math_marks} >
                <Line type={'monotone'} dataKey={students_math_marks.math_mark} stroke='#8884d8'></Line>
            </LCchart>
        </div>
    );
};

export default LineChart;