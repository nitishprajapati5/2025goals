//Front End Consts

export const REGISTRATION = "registration"
export const LOGIN = "login"
export const API = "/api/"
export const AUTH = "auth"
export const getAllJournal = "getAllJournal"
export const addJournal = "addJournal"
export const editjournalName = "editjournalName"
export const deletejournal = "deletejournal"

export const addLeafs = "addLeafs"
export const getLeafsinJournals = "getLeafsinJournals"
export const editleaf = "editleaf"
export const deleteleaf = "deleteleaf"
export const getBasedonId = "getLeafBasedonId"

export const LOGINENDPOINT = "Login"
export const REGISTRATIONENDPOINT = "Registration"
export const ADDJOURNALENDPOINT = "AddJournal"
export const GETJOURNALENDPOINT = "GetJournal" 
export const shareUUIDBasedonJournal = "shareUUIDBasedonJournal"
export const share = "share"
export const dashboard = "dashboard"
export const logout = "logout"
//Endpoint of Login and Registration
export const loginEndpoint = process.env.NEXT_PUBLIC_API_BASE + API + LOGIN
export const registrationEndpoint = process.env.NEXT_PUBLIC_API_BASE + API + REGISTRATION


//Endpoint of All Journals
export const getAllJournals = process.env.NEXT_PUBLIC_API_BASE + API + getAllJournal
export const createJournals = process.env.NEXT_PUBLIC_API_BASE + API + addJournal
export const editJournalName = process.env.NEXT_PUBLIC_API_BASE + API + editjournalName
export const deleteJournal = process.env.NEXT_PUBLIC_API_BASE + API + deletejournal

// Endpoint for All Leafs
export const AddJournalLeaf = process.env.NEXT_PUBLIC_API_BASE + API + addLeafs
export const GetAllLeafsinJournal = process.env.NEXT_PUBLIC_API_BASE + API + getLeafsinJournals
export const editJournalLeaf = process.env.NEXT_PUBLIC_API_BASE + API + editleaf
export const deleteJournalLeaf = process.env.NEXT_PUBLIC_API_BASE + API + deleteleaf
export const GetJournalLeafBasedonId = process.env.NEXT_PUBLIC_API_BASE + API + getBasedonId
export const GetshareUUIDBasedonJournal = process.env.NEXT_PUBLIC_API_BASE + API + shareUUIDBasedonJournal
export const openShareUrl = process.env.NEXT_PUBLIC_API_BASE + API + share
export const getDashboardEndpoint = process.env.NEXT_PUBLIC_API_BASE + API + dashboard
export const getLogoutRequest = process.env.NEXT_PUBLIC_API_BASE + API + logout