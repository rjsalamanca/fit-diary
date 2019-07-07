const db = require('./m_conn.js');

class Routines {
    constructor(id, routine_name, exercises) {
        this.id = id;
        this.routine_name = routine_name;
        this.exercises = exercises;
    }

    async getRoutine() {
        try {
            const response = await db.one(`
                SELECT * FROM routines WHERE id = $1`, [this.id]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }
}
module.exports = Routines;