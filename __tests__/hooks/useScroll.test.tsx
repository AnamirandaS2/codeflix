import { act, renderHook } from '@testing-library/react'
import { useScroll } from '@/app/hooks/useScroll'
import { describe, it, expect } from '@jest/globals'

describe('useScroll', () => {
    it('should update on scroll event', () => {
        const { result } = renderHook(() => useScroll())

        act(() => {
            global.window.scrollY = 100
            global.window.dispatchEvent(new Event('scroll'))
        })

        expect(result.current).not.toBeNull()

        act(() => {
            global.window.scrollY = 0
            global.window.dispatchEvent(new Event('scroll'))
        })

        expect(result.current).toBe(false)
    })
})
