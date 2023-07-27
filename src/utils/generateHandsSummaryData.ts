import { generateNumberArray } from './generateNumberArray'
import { generateString } from './generateString'

export const generateHandsSummaryData = (reportName: string) => {
  return {
    report_name: reportName,
    hand_no: generateString(true),
    site_id: generateString(true),
    id_report: generateString(),
    filters: { tags: generateNumberArray() },
    pagination: { page: 1, per_page: 10 },
  }
}
