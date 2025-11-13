// Create project
export const  createProject = async (req, res) => {
    try {
        const {} = await req.auth()
        const {
            workspaceId, description, name, status, 
            start_date, end_date, 
            team_lead, team_members, 
            progress, priority,
        } = req.body
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message })
    }
}

// Update project
export const updateProject = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message })
    }
}

// Add Member to Project
export const addMember = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.code || error.message })
    }
}