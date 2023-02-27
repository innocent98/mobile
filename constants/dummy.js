export const courses = [
  {id: 1, title: 'SOFTWARE DEVELOPMENT', code: 'CSC321', unit: 3},
  {id: 2, title: 'RESEARCH PROJECT', code: 'CSC323', unit: 6},
  {id: 3, title: 'SYSTEM ADMINISTRATION & COMPUTER', code: 'MIS322', unit: 3},
  {id: 4, title: 'COMPUTER GRAPHICS', code: 'CSC424', unit: 3},
  {id: 5, title: 'COMPUTER HARDWARE', code: 'CSC327', unit: 3},
];

export const conversations = [
  {id: 1, name: 'Registrar', time: '08:00pm'},
  {id: 2, name: 'Bursar', time: '12:00pm'},
  {id: 3, name: 'General Notification', time: '04:00am'},
];

export const messages = [
  {id: 1, message: 'Welcome', isSender: true},
  {id: 2, message: 'Welcome to the admin panel', isSender: false},
  {id: 3, message: 'thank you', isSender: true},
];

export const fees = [
  {
    id: 1,
    invoice: 'ESGT001',
    type: 'UTILITY',
    amount: '3000 CFA',
    acY: '2021/2022',
    status: 'NOT CLEARED',
  },
  {
    id: 2,
    invoice: 'ESGT020',
    type: 'DAMAGES',
    amount: '30000 CFA',
    acY: '2021/2022',
    status: 'NOT CLEARED',
  },
  {
    id: 3,
    invoice: 'ESGT010',
    type: 'UTILITY',
    amount: '3000 CFA',
    acY: '2021/2022',
    status: 'CLEARED',
  },
  {
    id: 4,
    invoice: 'ESGT003',
    type: 'TUITION',
    amount: '150000 NGN',
    acY: '2021/2022',
    status: 'NOT CLEARED',
  },
  {
    id: 5,
    invoice: 'ESGT021',
    type: 'HOSTEL',
    amount: '100000 CFA',
    acY: '2021/2022',
    status: 'CLEARED',
  },
];

export const list = [
  {
    id: 1,
    invoice: 'ESGT001',
    type: 'UTILITY',
    amount: '3000 CFA',
    acY: '2021/2022',
    status: 'NOT CLEARED',
  },
];

export const result = [
  {id: 1, code: 'CSC 208 (3)', score: 76, grade: 'A (4.5)', gp: 13.5},
  {id: 2, code: 'CSC 204 (3)', score: 72, grade: 'AB (4)', gp: 12},
  {id: 3, code: 'MTH 202 (3)', score: 44, grade: 'E (1)', gp: 3},
  {id: 4, code: 'PDP 202 (2)', score: 71, grade: 'AB (4)', gp: 8},
  {id: 5, code: 'CSC 206 (3)', score: 57, grade: 'C (2.5)', gp: 7.5},
  {id: 6, code: 'MKT 202 (2)', score: 90, grade: 'A (5)', gp: 14},
  {id: 7, code: 'FRN 202 (3)', score: 60, grade: 'BC (3)', gp: 6},
  {id: 8, sub: 'TCU', total: 32},
  {id: 9, sub: 'TGP', total: 96.0},
  {id: 10, sub: 'GPA', total: 3.6},
  {id: 11, sub: 'CO', total: 0},
];

export const student = [
  {
    id: 1,
    name: 'Student 1',
    code: '001',
    level: 1,
    sex: 'male',
    isHostel: false,
  },
  {
    id: 2,
    name: 'Student 2',
    code: '002',
    level: 1,
    sex: 'male',
    isHostel: true,
  },
  {
    id: 3,
    name: 'Student 3',
    code: '003',
    level: 2,
    sex: 'female',
    isHostel: false,
  },
  {
    id: 4,
    name: 'Student 4',
    code: '004',
    level: 3,
    sex: 'male',
    isHostel: false,
  },
  {
    id: 5,
    name: 'Student 5',
    code: '005',
    level: 1,
    sex: 'male',
    isHostel: true,
  },
  {
    id: 8,
    name: 'Student 8',
    code: '008',
    level: 2,
    sex: 'female',
    isHostel: true,
  },
  {
    id: 9,
    name: 'Student 9',
    code: '009',
    level: 3,
    sex: 'male',
    isHostel: false,
  },
  {
    id: 10,
    name: 'Student 10',
    code: '0010',
    level: 3,
    sex: 'male',
    isHostel: false,
  },
  {
    id: 11,
    name: 'Student 11',
    code: '0011',
    level: 2,
    sex: 'female',
    isHostel: true,
  },
  {
    id: 13,
    name: 'Student 13',
    code: '0013',
    level: 2,
    sex: 'female',
    isHostel: false,
  },
  {
    id: 14,
    name: 'Student 14',
    code: '0014',
    level: 2,
    sex: 'female',
    isHostel: true,
  },
  {
    id: 15,
    name: 'Student 15',
    code: '0015',
    level: 1,
    sex: 'female',
    isHostel: true,
  },
  {
    id: 16,
    name: 'Student 16',
    code: '0016',
    level: 1,
    sex: 'male',
    isHostel: true,
  },
];

export const results = [
  {id: 1, type: 'Fall 2018/2019', student: 100},
  {id: 2, type: 'Spring 2018/2019', student: 120},
  {id: 3, type: 'Summer 2018/2019', student: 125},
  {id: 4, type: 'Fall 2019/2020', student: 133},
  {id: 5, type: 'Spring 2019/2020', student: 110},
  {id: 6, type: 'Summer 2019/2020', student: 150},
  {id: 7, type: 'Fall 2020/2021', student: 180},
  {id: 8, type: 'Spring 2020/2021', student: 160},
  {id: 9, type: 'Summer 2020/2021', student: 130},
  {id: 10, type: 'Fall 2021/2022', student: 177},
  {id: 11, type: 'Spring 2021/2022', student: 180},
  {id: 12, type: 'Summer 2021/2022', student: 165},
  {id: 13, type: 'Fall 2022/2023', student: 200},
  {id: 14, type: 'Spring 2022/2023', student: 195},
  {id: 15, type: 'Summer 2022/2023', student: 210},
];

export const feesList = [
  {
    id: 1,
    invoice: 'ESGT001',
    type: 'UTILITY',
    amount: '3000 CFA',
    acY: '2021/2022',
    cat: 'GENERAL',
  },
  {
    id: 2,
    invoice: 'ESGT020',
    type: 'DAMAGES',
    amount: '30000 CFA',
    acY: '2021/2022',
    cat: 'SPECIFIC',
  },
  {
    id: 3,
    invoice: 'ESGT010',
    type: 'UTILITY',
    amount: '3000 CFA',
    acY: '2021/2022',
    cat: '300L 2nd',
  },
  {
    id: 4,
    invoice: 'ESGT003',
    type: 'TUITION',
    amount: '150000 NGN',
    acY: '2021/2022',
    cat: 'GENERAL',
  },
  {
    id: 5,
    invoice: 'ESGT021',
    type: 'HOSTEL',
    amount: '100000 CFA',
    acY: '2021/2022',
    cat: 'HOSTEL',
  },
];

export const courseList = [
  {id: 1, code: 'PRM 201'},
  {id: 2, code: 'MSE EDU 301'},
  {id: 3, code: 'PHY EDU 207'},
  {id: 4, code: 'CYB 202'},
  {id: 5, code: 'CYB 306'},
  {id: 6, code: 'ARC 203'},
  {id: 7, code: 'CYB 105'},
  {id: 8, code: 'MEC 201'},
  {id: 9, code: 'PSY 303'},
  {id: 10, code: 'ARC 201'},
  {id: 11, code: 'CYB 101'},
  {id: 12, code: 'MEC 202'},
  {id: 13, code: 'TLM 202'},
  {id: 14, code: 'PRM 302'},
  {id: 15, code: 'LLB 210'},
  {id: 16, code: 'GEO 204'},
  {id: 17, code: 'EEC 104'},
  {id: 18, code: 'GEO 304'},
  {id: 19, code: 'PSY 202'},
  {id: 20, code: 'CHT 204'},
  {id: 21, code: 'CHT 302'},
  {id: 22, code: 'BIOT 104'},
];

export const weeks = [
  {id: 1, week: 'Week 1', isPresent: true},
  {id: 2, week: 'Week 2', isPresent: false},
  {id: 3, week: 'Week 3', isPresent: true},
  {id: 4, week: 'Week 4', isPresent: true},
  {id: 5, week: 'Week 5', isPresent: false},
  {id: 6, week: 'Week 6', isPresent: undefined},
  {id: 7, week: 'Week 7', isPresent: undefined},
  {id: 8, week: 'Week 8', isPresent: undefined},
  {id: 9, week: 'Week 9', isPresent: undefined},
  {id: 10, week: 'Week 10', isPresent: undefined},
  {id: 11, week: 'Week 11', isPresent: undefined},
  {id: 12, week: 'Week 12', isPresent: undefined},
  {id: 13, week: 'Week 13', isPresent: undefined},
  {id: 14, week: 'Week 14', isPresent: undefined},
  {id: 15, week: 'Week 15', isPresent: undefined},
];

export const genderData = [
  {key: '1', value: 'Male'},
  {key: '2', value: 'Female'},
];

export const religionData = [
  {key: '1', value: 'Christian'},
  {key: '2', value: 'Muslim'},
  {key: '3', value: 'Prefer not to say'},
];

export const bloodGroupData = [
  {key: '1', value: 'O+'},
  {key: '2', value: 'O-'},
  {key: '3', value: 'A+'},
  {key: '4', value: 'A-'},
  {key: '5', value: 'B+'},
  {key: '6', value: 'B-'},
  {key: '7', value: 'AB'},
];

export const disabilityData = [
  {key: '1', value: 'Yes'},
  {key: '2', value: 'No'},
];

export const days = [
  {id: 1, day: 'Monday'},
  {id: 2, day: 'Tuesday'},
  {id: 3, day: 'Wednesday'},
  {id: 4, day: 'Thursday'},
  {id: 5, day: 'Friday'},
  {id: 6, day: 'Saturday'},
];

export const faculties = [
  {
    id: 1,
    faculty: 'FACULTY OF BUSINESS AND MANAGEMENT SCIENCE',
    courses: ['Accounting', 'Banking & Finance', 'Economics', 'Marketing'],
  },
  {
    id: 2,
    faculty: 'FACULTY OF SOCIAL SCIENCE',
    courses: ['History', 'Language', 'Sociology', 'Philosophy'],
  },
  {
    id: 3,
    faculty: 'FACULTY OF APPLIED SCIENCE AND ENGINEERING',
    courses: [
      'Architecture',
      'Computer Engineering',
      'Civil Engineering',
      'Estate Management',
    ],
  },
  {
    id: 4,
    faculty: 'FACULTY OF ARTS AND HUMANITIES',
    courses: ['English', 'Journalism', 'Linguistics', 'Mass Communication'],
  },
];

export const departments = [
  {
    id: 1,
    department: 'Accounting',
  },
  {
    id: 2,
    department: 'Banking & Finance',
  },
  {
    id: 3,
    department: 'Economics',
  },
  {
    id: 4,
    department: 'Marketing',
  },
  {
    id: 5,
    department: 'History',
  },
  {
    id: 11,
    department: 'Linguistics',
  },
  {
    id: 6,
    department: 'Mass Communication',
  },
  {
    id: 7,
    department: 'Estate Management',
  },
  {
    id: 8,
    department: 'Civil Engineering',
  },
  {
    id: 9,
    department: 'Architecture',
  },
  {
    id: 10,
    department: 'Sociology',
  },
];

export const schoolCourses = [
  {id: 1, name: 'English', unit: '3'},
  {id: 2, name: 'Journalism', unit: '3'},
  {id: 3, name: 'Linguistics', unit: '3'},
  {id: 4, name: 'Mass Communication', unit: '3'},
  {id: 5, name: 'Architecture', unit: '4'},
  {id: 6, name: 'Estate Management', unit: '4'},
  {id: 7, name: 'Civil Engineering', unit: '4'},
  {id: 8, name: 'Computer Engineering', unit: '3'},
];

export const options = [
  {id: 1, option: 'A'},
  {id: 2, option: 'B'},
  {id: 3, option: 'C'},
  {id: 4, option: 'D'},
];

export const calendar = [
  {id: 1, date: '1st August, 2022', title: 'Registration Of New In-Take Begin'},
  {id: 2, date: '1st August, 2022', title: 'Academic Session Begins'},
  {id: 3, date: '1st August, 2022', title: 'Revision Week'},
  {id: 4, date: '1st August, 2022', title: 'Lecture Free Week'},
  {id: 5, date: '1st - 5th December, 2022', title: 'Examination Week'},
  {id: 6, date: '5th - 15th December, 2022', title: 'Semester Break'},
];

export const curriculum = [
  {
    id: 1,
    title: 'Electronic & Computer Hardware',
    code: 'EEC202',
    lect: 'Mr Jonathan',
  },
];

export const level = [
  {id: 1, level: '100l first'},
  {id: 2, level: '100l second'},
  {id: 3, level: '200l first'},
  {id: 4, level: '200l second'},
  {id: 5, level: '300l first'},
  {id: 6, level: '300l second'},
  {id: 7, level: '400l first'},
  {id: 8, level: '400l second'},
]
