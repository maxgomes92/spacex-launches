import { renderHook } from "@testing-library/react"
import { useQuery } from '@apollo/client'
import { GetRocketsDocument } from "../generated/graphql"
import useRockets from "./useRockets"

jest.mock('@apollo/client')

describe('useRockets', () => {
  it('should call useQuery', () => {
    renderHook(() => useRockets())

    expect(useQuery).toHaveBeenCalledWith(GetRocketsDocument)
  })
})