const counterId = Number(import.meta.env.VITE_YM_COUNTER_ID)
const analyticsEnabled = Number.isInteger(counterId) && counterId > 0

function getPdfName(href) {
  try {
    const fileName = new URL(href, window.location.origin).pathname.split('/').pop()
    return fileName?.toLowerCase().endsWith('.pdf') ? fileName : null
  } catch {
    return null
  }
}

function reportPdfOpen(event) {
  const link = event.target.closest('a[href]')
  if (!link) return

  const fileName = getPdfName(link.href)
  if (!fileName) return

  window.ym(counterId, 'reachGoal', 'portfolio_pdf_open', { file: fileName })
}

export function startAnalytics() {
  if (!analyticsEnabled || document.querySelector('script[data-ym-counter]')) return

  window.ym = window.ym || function metricaQueue(...args) {
    ;(window.ym.a = window.ym.a || []).push(args)
  }
  window.ym.l = Date.now()
  window.ym(counterId, 'init', {
    clickmap: false,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: false,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://mc.yandex.ru/metrika/tag.js'
  script.dataset.ymCounter = String(counterId)
  document.head.append(script)

  document.addEventListener('click', reportPdfOpen)
}
