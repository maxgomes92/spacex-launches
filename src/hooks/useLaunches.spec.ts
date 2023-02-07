import { renderHook } from "@testing-library/react"
import useLaunches from "./useLaunches"
import { useQuery } from '@apollo/client'
import { GetLaunchesDocument } from "../generated/graphql"

jest.mock('@apollo/client')

describe('useLaunches', () => {
  it('should call useQuery', () => {
    renderHook(() => useLaunches(10))

    expect(useQuery).toHaveBeenCalledWith(GetLaunchesDocument, { variables: { limit: 10 }})
  })
})