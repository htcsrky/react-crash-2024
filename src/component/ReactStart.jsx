
const ReactStart = () => {
    const name = 'Hatice'
    const X = 20
    const Y = 30
    const names = ['Zafer', 'Efe', 'Ömüş', 'Ebrar', 'Elif', 'Yusuf']
    const loginIn = true
    const styles = {
        color: 'red',
        fontSize: '30px'
    }
    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div style={styles}>Hello {name}</div>
            <div>The sum of {X} and {Y} is {X + Y}</div>
            <ul>
                {
                    names.map((n, i) => (

                        <li key={i} style={{
                            padding: '20px'
                        }}>{n}</li>

                    ))
                }
                {
                    loginIn ? <h1> Do you rememder me</h1> : <h1> No remember</h1>
                }
                {loginIn && <h1> Just only True</h1>}
            </ul>
        </>
    )
}

export default ReactStart