
export default function FileInput({setImg}) {
    const handleChange = e => {
        if(e.target.files[0]) {
            setImg(e.target.files[0]);
        }
    };

    return (

        <div class="file-input">
            <input type="file" id="file" className="file-input__input"
                accept="image/png, image/jpeg" onChange={handleChange} />
                <label htmlFor="file">
                    Select file
                <p class="file-input__file-name"></p>
            </label>
        </div>

    );

}