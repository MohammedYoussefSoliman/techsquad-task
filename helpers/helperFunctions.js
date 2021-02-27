import moment from 'moment';

export const handleStyles = (classes, scss, generalClass) => {
    let classesArr = []
    if(classes) {
        classesArr = classes.split(" ").map(cls => scss[`${cls}`])
    }
    if(generalClass) {
        return [scss[`${generalClass}`], classesArr].join(" ")
    }else{
        return [classesArr].join(" ")
    }
}

export const handleDate = (date) => {
    return moment.utc(date)
    .format('dddd, MMMM Do YYYY')+" AT "+moment.utc(date).format('h:mm a')
}