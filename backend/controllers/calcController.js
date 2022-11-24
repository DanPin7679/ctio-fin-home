const { getCalcResults } = require("./getCalc")

const postCalc = async(req, res)=>{
  try {
    const c = await getCalcResults(JSON.stringify(req.body))
    res.status(200).json(c)
  } catch (error) {
    res.status(400).json({error: error.message})
    console.log(error)
  }
}

module.exports = {
  postCalc
}