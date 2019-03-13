const formatInput = document.querySelector('.js-format')

// new Cleave(formatInput, {
//     creditCard: true
// })

// new Cleave(formatInput, {
//     phone: true,
//     phoneRegionCode: 'BR'
// })

// new Cleave(formatInput, {
//     date: true,
//     datePattern: ['d', 'm', 'y']
// })

// new Cleave(formatInput, {
//     time: true,
//     timePattern: ['h', 'm', 's']
// })

// new Cleave(formatInput, {
//     numeral: true,
//     numeralThousandsGroupStyle: 'thousand'
// })

new Cleave(formatInput, {
    blocks: [3, 3, 3, 2],
    prefix: 'MY',
    uppercase: true
})
