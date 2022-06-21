import { useState } from "react";
import "./UpdateHousewife.scss";


const UpdateHousewife = ({ housewifeId, name, placeOfResidence, seasonsPresent, currentRelationshipStatus, famousQuote, toggleUpdateBox }) => {

  const [housewife, setHousewife] = useState({
    name: { name },
    placeOfResidence: { placeOfResidence },
    seasonsPresent: { seasonsPresent },
    currentRelationshipStatus: { currentRelationshipStatus },
    famousQuote: { famousQuote }

  })

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch('https://rhbackend-wxudo37tma-nw.a.run.app/housewife/update/' + housewifeId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(housewife)
    })
      .then((response) => response.json())
      .then((json => console.log(json)))
      .catch(err => console.log(err))
    e.target.reset();
  }

  

  return (
    <div className="update__housewife-background">
      <div className="update__housewife">
        <form onSubmit={handleUpdate}>
          <input type="text" defaultValue={name} onInput={(e) => setHousewife({ ...housewife, name: e.target.value })} />
          <input type="text" defaultValue={placeOfResidence} onInput={(e) => setHousewife({ ...housewife, placeOfResidence: e.target.value })} />
          <input type="text" defaultValue={seasonsPresent} onInput={(e) => setHousewife({ ...housewife, seasonsPresent: e.target.value })} />
          <input type="text" defaultValue={currentRelationshipStatus} onInput={(e) => setHousewife({ ...housewife, currentRelationshipStatus: e.target.value })} />
          <input type="text" defaultValue={famousQuote} onInput={(e) => setHousewife({ ...housewife, famousQuote: e.target.value })} />
          <button type="submit" className="update__button" onClick={toggleUpdateBox}>Update</button>
        </form>
      </div>
    </div>
  )
}


export default UpdateHousewife