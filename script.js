function saveSpeaker(speaker, dataset) {
    const table1 = document.querySelector(`#${dataset} #gt`)
    let raw_data = document.createElement('td')
    raw_data.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_ours/${dataset}/${speaker}_gold.wav" type="audio/mpeg">`
    table1.appendChild(raw_data)
    
    const table2 = document.querySelector(`#${dataset} #ours`)
    let raw_data2 = document.createElement('td')
    raw_data2.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_ours/${dataset}/${speaker}_synth.wav" type="audio/mpeg">`
    table2.appendChild(raw_data2)
    
    const table3 = document.querySelector(`#${dataset} #reference`)
    let raw_data3 = document.createElement('td')
    raw_data3.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_ours/${dataset}/${speaker}_ref.wav" type="audio/mpeg">`
    table3.appendChild(raw_data3)
    
    const table0 = document.querySelector(`#${dataset} #text`)
    let raw_data0 = document.createElement('td')
    raw_data0.className = 'text';
    fetch(`./wavs/wavs_ours/${dataset}/${speaker}_script.txt`)
    .then( response => response.text() )
    .then( text => raw_data0.innerText = text )
    table0.appendChild(raw_data0)

    const table4 = document.querySelector(`#${dataset} #stylespeech`)
    let raw_data4 = document.createElement('td')
    raw_data4.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_ss/${dataset}/${speaker}_synth.wav" type="audio/mpeg">`
    table4.appendChild(raw_data4)

    const table5 = document.querySelector(`#${dataset} #gradtts`)
    let raw_data5 = document.createElement('td')
    raw_data5.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_gradtts/${dataset}/${speaker}_synth.wav" type="audio/mpeg">`
    table5.appendChild(raw_data5)

    // const table6 = document.querySelector(`#${dataset} #speaker`)
    // let raw_data6 = document.createElement('td')
    // raw_data6.innerText = speaker
    // table6.appendChild(raw_data6)

    const table7 = document.querySelector(`#${dataset} #yourtts`)
    let raw_data7 = document.createElement('td')
    raw_data7.innerHTML = `<audio id="audio-player" controls="" preload="none" src="./wavs/wavs_yourtts/${dataset}/${speaker}_synth.wav" type="audio/mpeg">`
    table7.appendChild(raw_data7)
}


const speakerArray_VCTK = [
    "p229", "p256", "p268", "p308", "p314"
]

for (var i = 0; i < speakerArray_VCTK.length; i++) {
    let speaker = speakerArray_VCTK[i]
    saveSpeaker(speaker, 'vctk')
}

const speakerArray_LibriTTS = [
    "121", "908", "3729", "6829", "7729"
]

for (var i = 0; i < speakerArray_LibriTTS.length; i++) {
    let speaker = speakerArray_LibriTTS[i]
    saveSpeaker(speaker, 'libritts')
}
