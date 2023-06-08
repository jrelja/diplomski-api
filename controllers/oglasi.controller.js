const postgre = require('../database')
const oglasiController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM oglasi WHERE (tip='stan' OR tip='kuca') AND datum > '2022-01-01' AND cijena_m2 > 10")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    getPrigazOglasi: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT o.id, o.povrsina, o.cijena, o.cijena_m2, o.naslov, o.link, o.tip, c.ocjena, o.lokacija, o.slika, ST_X(o.geom::geometry) AS lon, ST_Y(o.geom::geometry) AS lat FROM oglasi o JOIN ocjene c ON o.njuskalo_id = c.njuskalo_id WHERE o.geom IS NOT NULL AND o.tocna_lokacija = 'true' AND o.cijena_m2 > 10 AND o.stanje = 'Aktivan'")
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
}

module.exports = oglasiController