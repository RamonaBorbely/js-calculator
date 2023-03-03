// const numbers = document.querySelectorAll('.number')
// const [divide, multiply, subtract, add, equal] = document.querySelectorAll('.operation-element')
// const [clear, plusMinus, percent] = document.querySelectorAll('.special')
let inputField = document.querySelector('.input-filed')

let elements = document.querySelectorAll('.element')

let nums = []
let operator, total

elements.forEach( element => element.addEventListener('click', () => {

    if(/^\d+$/.test(element.value) || element.value === '.') { 
      
        inputField.value += element.value

        nums.push(Number(inputField.value))
        console.log(nums)
    }
   
    else if(element.value === 'C') {
        inputField.value = ''
    }

    else if(element.value === '+' || element.value === '-' || 
        element.value === 'x' || element.value === '/' ) {
            
        operator = element.value

        inputField.value = ''

    }

    else if(element.value === '=') {
   
        if (operator === '+'){
            total = nums[nums.length-1] + nums[nums.length-2]
            nums.push(total)
            inputField.value = total
        }

        if (operator === '-'){
            total = nums[nums.length-2] - nums[nums.length-1]
            nums.push(total)
            inputField.value = total

        }

        if (operator === '/'){
            if(nums[nums.length -1] !== 0){
                total = nums[nums.length-2] / nums[nums.length-1]
                nums.push(total)
                inputField.value = total
            } else {
                inputField.value = 'Error'
            }
        }
        if (operator === 'x'){
            total = nums[nums.length-2] * nums[nums.length-1]
            nums.push(total)
            inputField.value = total        
        }
    }

    else if(element.value === '%') {
        let res = nums[nums.length -1] /100
        inputField.value = res
    }

    else if(element.value === '!'){
        let res =  nums[nums.length-1] = nums[nums.length-1] * -1
        inputField.value = res
    }
   
}))

