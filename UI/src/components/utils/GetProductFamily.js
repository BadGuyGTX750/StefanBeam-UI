// Get product family from the dropdowns
export default function GetProductFamily(value) {
    value = value.split(',').join('')
    value = value.split(' ').join('-')
    console.log(value)
    window.location.href = "/" + value
}