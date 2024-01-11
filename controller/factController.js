const factModel = require("../database/schema/factschema");

const createFact = async (req, res) => {
  const createdFact = await factModel.create(req.body);
  res.status(200).send(createdFact);
};

const getFact = async (req, res) => {
  const gotFact = await factModel.findOne( {UserId: req.body.UserId});
  res.status(200).send(gotFact);
};

const getAllFact =  async(req,res) => {
    try {
        const data = await factModel.find()
        res.status(200).send(data)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteFact =  async(req,res) => {
    const factId = req.params.factId
    try {
        const fact = await factModel.findByIdAndDelete(factId)
        res.status(200).send(fact)
    } catch (err) {
        res.status(500).send(err)
    }
}


{// button.addEventListener("click", async() => {
//     if(rating.classList.contains("past-rating-selected")) {
//         const count = rating.querySelector(".past-rating-count");

//         count.textContent = Math.min(0, Number(count.textContent) -1);
//         rating.classList.remove("post-rating-selected");
//     }
// } );

// rating.classList.add("post-rating-selected");

// const likeOrDislike = LikeRating === rating ? "like" : "dislike";
// const response = await fetch(`/localhost:3000/${postId}/${likeOrDislike}`);
// const body = await response.json(); 
}


module.exports = { createFact, getFact, getAllFact, deleteFact, };
