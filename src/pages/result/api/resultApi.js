import api from '../../../apis/client'

export async function createPost(certPart) {
  try {
    const body = { disease: certPart.disease, drug_name: certPart.drug_name }

    const data = await api.post('/ai_info/', body)

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
