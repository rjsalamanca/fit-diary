const db = require('./m_conn.js');

class Routines {
    constructor(id, routine_name, exercises, user_id) {
        this.id = id;
        this.routine_name = routine_name;
        this.exercises = exercises;
        this.user_id = user_id;
    }

    static async getRoutine(uid) {
        try {
            const response = await db.any(`
                SELECT * FROM routines WHERE user_id = $1`, [uid]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getExercises() {
        try {
            const response = await db.any(`
            
            `);
            return response;
        } catch (err) {
            return err.message;
        }
    }
}
module.exports = Routines;