export const getNames = (blogs) => {
    let names = blogs.map(blog => blog.name)
    let uniqueNames = [...new Set(names)];
    return uniqueNames
}
export const misingNumInSeq = (source, min = 0, max = source.length) => {
    console.log(source)
    if (min >= max) {
        return min + 1;
    }
    let pivot = Math.floor((min + max) / 2);
    if (source[pivot] === pivot + 1) {
        return misingNumInSeq(source, pivot + 1, max);
    } else {
        return misingNumInSeq(source, min, pivot);
    }
}

export const timePast = (time) => {
    let past = Math.round((new Date().getTime() - new Date(time).getTime()) / 60000)
    if (past < 60)
        return (past !== 1 ? "Before " + past + " minutes" : "Before " + past + " minute")
    else if (past / 60 < 24)
        return (Math.round(past / 60) !== 1 ? "Before " + Math.round(past / 60) + " hours" : "Before 1 hour")
    else
        return new Date(time).toLocaleDateString("uk-Uk")
}
export const randomDate = () => {
    let start = new Date("January 1, 2022 00:00:00")
    let end = new Date()
    let rand = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return rand
}