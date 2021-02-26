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