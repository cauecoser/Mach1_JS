{
    try {
        try {
            try {
                throw 'Erro!'
            } catch (err3) {
                console.log(err3)
                throw err3
            }
        } catch (err2) {
            console.warn(err2)
                throw err2
        }
    } catch (err1) {
        console.error(err1)
    }
}